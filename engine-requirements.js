const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 25) {
  console.error(
    `\n This package requires Node.js 25+ to run reliably.\n` +
    `   You are using Node.js ${process.versions.node}.\n` +
    `   Please upgrade to Node.js 25.0.0+ to proceed.\n`
  );
  process.exit(1);
}
