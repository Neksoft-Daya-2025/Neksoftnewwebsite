# NekSoft website

The repository root preserves the files deployed in Hostinger's public web directory. The original deployment snapshot is tagged v1.

The node-app directory contains the recovered Hostinger Node application, including its backend, dependency lockfile, prebuilt frontend and server bundles, and the four editable frontend files present on the server. Use Node.js 22.15 or newer and run npm ci and npm start from node-app to run the prebuilt application.

The original frontend source tree, Vite and TypeScript configuration, and build scripts were missing from the deployed copy. A fresh frontend build requires those files. Supply deployment settings and persistent data separately.
