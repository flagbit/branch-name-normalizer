const core = require("@actions/core");
try {
    const input = core.getInput("branch") ? core.getInput("branch") : process.env.GITHUB_HEAD_REF;
    let output = input
      .trim()
      .toLowerCase()
      .split("/")
      .pop()
      .replace(/([^0-9a-zA-Z-]+)/g, "-");
    core.setOutput("normalized", output);
    if (output.charAt(output.length - 1) == '-') {
        output = output.substring(0, output.length - 1);
    }
} catch (err) {
    core.setFailed(err);
}