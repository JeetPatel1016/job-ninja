-- CreateTable
CREATE TABLE "SearchQuery" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "sites" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "JobPosting" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "pay_interval" TEXT NOT NULL,
    "pay_min" TEXT NOT NULL,
    "pay_max" TEXT NOT NULL,
    "currency" TEXT,
    "description" TEXT NOT NULL,
    "date_posted" TEXT NOT NULL,
    "is_remote" BOOLEAN NOT NULL,
    "job_link" TEXT NOT NULL,
    "queryId" TEXT NOT NULL,
    CONSTRAINT "JobPosting_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "SearchQuery" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SearchQuery_id_key" ON "SearchQuery"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JobPosting_id_key" ON "JobPosting"("id");
