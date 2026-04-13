import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Top institutions with calibration data
const institutions = [
  { name: "Massachusetts Institute of Technology", country: "US", stateOrProvince: "MA", rankingUsNews: 1, rankingQs: 1, acceptanceRate: 0.04, avgGpa: 3.39, studentFacultyRatio: 3, researchOutput: 98, tierScore: 97 },
  { name: "Stanford University", country: "US", stateOrProvince: "CA", rankingUsNews: 2, rankingQs: 2, acceptanceRate: 0.04, avgGpa: 3.57, studentFacultyRatio: 5, researchOutput: 97, tierScore: 96 },
  { name: "Harvard University", country: "US", stateOrProvince: "MA", rankingUsNews: 3, rankingQs: 4, acceptanceRate: 0.03, avgGpa: 3.65, studentFacultyRatio: 6, researchOutput: 99, tierScore: 95 },
  { name: "California Institute of Technology", country: "US", stateOrProvince: "CA", rankingUsNews: 4, rankingQs: 6, acceptanceRate: 0.03, avgGpa: 3.42, studentFacultyRatio: 3, researchOutput: 96, tierScore: 95 },
  { name: "Princeton University", country: "US", stateOrProvince: "NJ", rankingUsNews: 5, rankingQs: 11, acceptanceRate: 0.04, avgGpa: 3.51, studentFacultyRatio: 5, researchOutput: 94, tierScore: 94 },
  { name: "University of Chicago", country: "US", stateOrProvince: "IL", rankingUsNews: 6, rankingQs: 12, acceptanceRate: 0.05, avgGpa: 3.48, studentFacultyRatio: 5, researchOutput: 93, tierScore: 93 },
  { name: "Columbia University", country: "US", stateOrProvince: "NY", rankingUsNews: 7, rankingQs: 18, acceptanceRate: 0.04, avgGpa: 3.55, studentFacultyRatio: 6, researchOutput: 92, tierScore: 92 },
  { name: "University of Pennsylvania", country: "US", stateOrProvince: "PA", rankingUsNews: 8, rankingQs: 14, acceptanceRate: 0.06, avgGpa: 3.56, studentFacultyRatio: 6, researchOutput: 91, tierScore: 91 },
  { name: "Yale University", country: "US", stateOrProvince: "CT", rankingUsNews: 9, rankingQs: 16, acceptanceRate: 0.05, avgGpa: 3.52, studentFacultyRatio: 6, researchOutput: 93, tierScore: 92 },
  { name: "Duke University", country: "US", stateOrProvince: "NC", rankingUsNews: 10, rankingQs: 25, acceptanceRate: 0.06, avgGpa: 3.58, studentFacultyRatio: 6, researchOutput: 88, tierScore: 89 },
  { name: "Johns Hopkins University", country: "US", stateOrProvince: "MD", rankingUsNews: 11, rankingQs: 24, acceptanceRate: 0.07, avgGpa: 3.52, studentFacultyRatio: 7, researchOutput: 95, tierScore: 90 },
  { name: "Northwestern University", country: "US", stateOrProvince: "IL", rankingUsNews: 12, rankingQs: 27, acceptanceRate: 0.07, avgGpa: 3.54, studentFacultyRatio: 6, researchOutput: 87, tierScore: 88 },
  { name: "Carnegie Mellon University", country: "US", stateOrProvince: "PA", rankingUsNews: 22, rankingQs: 42, acceptanceRate: 0.11, avgGpa: 3.42, studentFacultyRatio: 8, researchOutput: 90, tierScore: 88 },
  { name: "University of California, Berkeley", country: "US", stateOrProvince: "CA", rankingUsNews: 15, rankingQs: 10, acceptanceRate: 0.12, avgGpa: 3.38, studentFacultyRatio: 18, researchOutput: 97, tierScore: 88 },
  { name: "University of California, Los Angeles", country: "US", stateOrProvince: "CA", rankingUsNews: 18, rankingQs: 15, acceptanceRate: 0.09, avgGpa: 3.42, studentFacultyRatio: 18, researchOutput: 95, tierScore: 86 },
  { name: "Georgia Institute of Technology", country: "US", stateOrProvince: "GA", rankingUsNews: 33, rankingQs: 80, acceptanceRate: 0.17, avgGpa: 3.35, studentFacultyRatio: 18, researchOutput: 85, tierScore: 82 },
  { name: "University of Michigan, Ann Arbor", country: "US", stateOrProvince: "MI", rankingUsNews: 21, rankingQs: 23, acceptanceRate: 0.18, avgGpa: 3.45, studentFacultyRatio: 12, researchOutput: 92, tierScore: 84 },
  { name: "Cornell University", country: "US", stateOrProvince: "NY", rankingUsNews: 17, rankingQs: 20, acceptanceRate: 0.09, avgGpa: 3.52, studentFacultyRatio: 9, researchOutput: 90, tierScore: 89 },
  { name: "University of Texas at Austin", country: "US", stateOrProvince: "TX", rankingUsNews: 32, rankingQs: 58, acceptanceRate: 0.29, avgGpa: 3.38, studentFacultyRatio: 17, researchOutput: 88, tierScore: 78 },
  { name: "University of Illinois Urbana-Champaign", country: "US", stateOrProvince: "IL", rankingUsNews: 35, rankingQs: 64, acceptanceRate: 0.44, avgGpa: 3.40, studentFacultyRatio: 20, researchOutput: 90, tierScore: 77 },
  { name: "University of Washington", country: "US", stateOrProvince: "WA", rankingUsNews: 40, rankingQs: 52, acceptanceRate: 0.48, avgGpa: 3.42, studentFacultyRatio: 18, researchOutput: 92, tierScore: 76 },
  { name: "University of Wisconsin-Madison", country: "US", stateOrProvince: "WI", rankingUsNews: 38, rankingQs: 75, acceptanceRate: 0.49, avgGpa: 3.38, studentFacultyRatio: 17, researchOutput: 89, tierScore: 74 },
  { name: "Purdue University", country: "US", stateOrProvince: "IN", rankingUsNews: 43, rankingQs: 85, acceptanceRate: 0.53, avgGpa: 3.32, studentFacultyRatio: 13, researchOutput: 82, tierScore: 72 },
  { name: "Ohio State University", country: "US", stateOrProvince: "OH", rankingUsNews: 45, rankingQs: 89, acceptanceRate: 0.53, avgGpa: 3.40, studentFacultyRatio: 19, researchOutput: 85, tierScore: 70 },
  { name: "University of Southern California", country: "US", stateOrProvince: "CA", rankingUsNews: 28, rankingQs: 60, acceptanceRate: 0.12, avgGpa: 3.52, studentFacultyRatio: 9, researchOutput: 83, tierScore: 83 },
  // UK
  { name: "University of Oxford", country: "UK", stateOrProvince: null, rankingUsNews: null, rankingQs: 3, acceptanceRate: 0.15, avgGpa: null, studentFacultyRatio: 10, researchOutput: 99, tierScore: 96 },
  { name: "University of Cambridge", country: "UK", stateOrProvince: null, rankingUsNews: null, rankingQs: 5, acceptanceRate: 0.18, avgGpa: null, studentFacultyRatio: 11, researchOutput: 98, tierScore: 95 },
  { name: "Imperial College London", country: "UK", stateOrProvince: null, rankingUsNews: null, rankingQs: 8, acceptanceRate: 0.12, avgGpa: null, studentFacultyRatio: 12, researchOutput: 92, tierScore: 91 },
  // Add more as needed...
];

const departments = [
  // MIT departments
  { institutionName: "Massachusetts Institute of Technology", name: "Computer Science", rankingScore: 100, medianSalary: 165000, phdPlacementRate: 0.35 },
  { institutionName: "Massachusetts Institute of Technology", name: "Electrical Engineering", rankingScore: 99, medianSalary: 140000, phdPlacementRate: 0.30 },
  { institutionName: "Massachusetts Institute of Technology", name: "Mathematics", rankingScore: 98, medianSalary: 120000, phdPlacementRate: 0.40 },
  // Stanford
  { institutionName: "Stanford University", name: "Computer Science", rankingScore: 99, medianSalary: 170000, phdPlacementRate: 0.33 },
  { institutionName: "Stanford University", name: "Business", rankingScore: 98, medianSalary: 180000, phdPlacementRate: 0.10 },
  // CMU
  { institutionName: "Carnegie Mellon University", name: "Computer Science", rankingScore: 97, medianSalary: 155000, phdPlacementRate: 0.28 },
  // Berkeley
  { institutionName: "University of California, Berkeley", name: "Computer Science", rankingScore: 96, medianSalary: 160000, phdPlacementRate: 0.30 },
  { institutionName: "University of California, Berkeley", name: "Electrical Engineering", rankingScore: 95, medianSalary: 140000, phdPlacementRate: 0.25 },
  // Georgia Tech
  { institutionName: "Georgia Institute of Technology", name: "Computer Science", rankingScore: 90, medianSalary: 135000, phdPlacementRate: 0.20 },
  // UIUC
  { institutionName: "University of Illinois Urbana-Champaign", name: "Computer Science", rankingScore: 92, medianSalary: 140000, phdPlacementRate: 0.22 },
];

async function main() {
  console.log("Seeding institutions...");

  for (const inst of institutions) {
    await prisma.institution.upsert({
      where: { name: inst.name },
      update: inst,
      create: inst,
    });
  }

  console.log(`Seeded ${institutions.length} institutions`);

  console.log("Seeding departments...");

  for (const dept of departments) {
    const institution = await prisma.institution.findUnique({
      where: { name: dept.institutionName },
    });
    if (!institution) continue;

    await prisma.department.upsert({
      where: {
        institutionId_name: {
          institutionId: institution.id,
          name: dept.name,
        },
      },
      update: {
        rankingScore: dept.rankingScore,
        medianSalary: dept.medianSalary,
        phdPlacementRate: dept.phdPlacementRate,
      },
      create: {
        institutionId: institution.id,
        name: dept.name,
        rankingScore: dept.rankingScore,
        medianSalary: dept.medianSalary,
        phdPlacementRate: dept.phdPlacementRate,
      },
    });
  }

  console.log(`Seeded ${departments.length} departments`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
