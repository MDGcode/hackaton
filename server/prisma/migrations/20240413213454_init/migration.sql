-- CreateTable
CREATE TABLE "CreatePost" (
    "id" SERIAL NOT NULL,
    "data_ora" TIMESTAMP(3) NOT NULL,
    "typeOfPost" TEXT NOT NULL,
    "appType" TEXT NOT NULL,
    "idImage" INTEGER,
    "idAccount" TEXT NOT NULL,

    CONSTRAINT "CreatePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountInfo" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "userNameIg" TEXT,
    "userNamePsw" TEXT,
    "appKeyTwitter" TEXT,
    "appSecretTwitter" TEXT,
    "accessTokenTwitter" TEXT,
    "accessSecretTwitter" TEXT,

    CONSTRAINT "AccountInfo_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "AccountInfo_userId_key" ON "AccountInfo"("userId");

-- AddForeignKey
ALTER TABLE "CreatePost" ADD CONSTRAINT "CreatePost_idAccount_fkey" FOREIGN KEY ("idAccount") REFERENCES "AccountInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatePost" ADD CONSTRAINT "CreatePost_idImage_fkey" FOREIGN KEY ("idImage") REFERENCES "ImageStorage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
