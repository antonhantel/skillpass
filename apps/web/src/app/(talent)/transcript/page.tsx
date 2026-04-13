"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { trpc } from "@/lib/trpc-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Upload, CheckCircle2, Clock, AlertCircle } from "lucide-react";

function getStatusBadge(status: string) {
  switch (status) {
    case "UPLOADED":
      return <Badge variant="secondary"><Clock className="mr-1 h-3 w-3" />Uploaded</Badge>;
    case "PROCESSING":
      return <Badge variant="secondary"><Clock className="mr-1 h-3 w-3" />Processing</Badge>;
    case "PARSED":
      return <Badge><CheckCircle2 className="mr-1 h-3 w-3" />Parsed</Badge>;
    case "VERIFIED":
      return <Badge className="bg-green-600"><CheckCircle2 className="mr-1 h-3 w-3" />Verified</Badge>;
    case "FAILED":
      return <Badge variant="destructive"><AlertCircle className="mr-1 h-3 w-3" />Failed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

export default function TranscriptPage() {
  const { data: transcripts, isLoading } = trpc.transcript.list.useQuery();
  const utils = trpc.useUtils();

  const createTranscript = trpc.transcript.create.useMutation({
    onSuccess: () => {
      utils.transcript.list.invalidate();
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      // In production, this would:
      // 1. Get a presigned S3 URL
      // 2. Upload the file to S3
      // 3. Create the transcript record with the S3 URL
      // For now, we simulate with a placeholder URL
      createTranscript.mutate({
        fileUrl: `https://skillpass-uploads.s3.amazonaws.com/transcripts/${Date.now()}-${file.name}`,
        fileName: file.name,
        fileType: file.type.includes("pdf") ? "pdf" : "image",
      });
    },
    [createTranscript]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transcripts</h1>

      {/* Upload Zone */}
      <Card>
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors ${
              isDragActive
                ? "border-primary bg-primary/5"
                : "border-muted-foreground/25 hover:border-primary/50"
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="h-10 w-10 text-muted-foreground" />
            <p className="mt-4 text-center font-medium">
              {isDragActive
                ? "Drop your transcript here"
                : "Drag & drop your transcript, or click to browse"}
            </p>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              PDF or image files up to 10MB
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Transcript List */}
      <div className="space-y-4">
        {transcripts?.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">
                No transcripts uploaded yet. Upload your first transcript to get
                your GPA calibrated.
              </p>
            </CardContent>
          </Card>
        )}

        {transcripts?.map((transcript) => (
          <Card key={transcript.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-muted-foreground" />
                <div>
                  <div className="font-medium">{transcript.fileName}</div>
                  <div className="text-xs text-muted-foreground">
                    Uploaded{" "}
                    {new Date(transcript.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
              {getStatusBadge(transcript.status)}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
