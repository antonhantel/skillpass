import {
  TextractClient,
  StartDocumentAnalysisCommand,
  GetDocumentAnalysisCommand,
  type Block,
} from "@aws-sdk/client-textract";

let client: TextractClient | null = null;

function getTextractClient(): TextractClient {
  if (!client) {
    client = new TextractClient({
      region: process.env.AWS_REGION ?? "us-east-1",
    });
  }
  return client;
}

export async function startTranscriptAnalysis(
  s3Bucket: string,
  s3Key: string
): Promise<string> {
  const textract = getTextractClient();
  const command = new StartDocumentAnalysisCommand({
    DocumentLocation: {
      S3Object: { Bucket: s3Bucket, Name: s3Key },
    },
    FeatureTypes: ["TABLES", "FORMS"],
  });

  const response = await textract.send(command);
  if (!response.JobId) throw new Error("Textract did not return a JobId");
  return response.JobId;
}

export async function getAnalysisResults(
  jobId: string
): Promise<{ status: string; blocks: Block[] }> {
  const textract = getTextractClient();
  const allBlocks: Block[] = [];
  let nextToken: string | undefined;

  do {
    const command = new GetDocumentAnalysisCommand({
      JobId: jobId,
      NextToken: nextToken,
    });
    const response = await textract.send(command);

    if (response.JobStatus === "IN_PROGRESS") {
      return { status: "IN_PROGRESS", blocks: [] };
    }
    if (response.JobStatus === "FAILED") {
      return { status: "FAILED", blocks: [] };
    }

    if (response.Blocks) {
      allBlocks.push(...response.Blocks);
    }
    nextToken = response.NextToken;
  } while (nextToken);

  return { status: "SUCCEEDED", blocks: allBlocks };
}
