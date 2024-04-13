-- CreateTable
CREATE TABLE "CreatePost" (
    "id" SERIAL NOT NULL,
    "data_ora" TIMESTAMP(3) NOT NULL,
    "typeOfPost" TEXT NOT NULL,
    "appType" TEXT NOT NULL,
    "idImage" INTEGER,
    "idAccount" INTEGER,

    CONSTRAINT "CreatePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageStorage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ImageStorage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "data_ora" TIMESTAMP(3) NOT NULL,
    "typeOfPost" TEXT NOT NULL,
    "addType" TEXT NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");
