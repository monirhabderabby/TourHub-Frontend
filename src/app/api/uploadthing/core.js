import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

// Auth check function
const authenticateUser = () => {
    return {};
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    userProfileImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(),
};
