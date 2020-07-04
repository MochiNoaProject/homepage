const { execSync } = require("child_process");

try {
    execSync("tsc --project tsconfig.json", {
        stdio: "inherit",
    });
} catch (e) {
    process.exit(1);
}
