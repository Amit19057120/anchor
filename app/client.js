const anchor = require("@project-serum/anchor");
require("dotenv").config();

// Configure the local cluster.
anchor.setProvider(anchor.Provider.local());

async function main() {
  // #region main
  // Read the generated IDL.
  const idl = JSON.parse(
    require("fs").readFileSync("./target/idl/hello_anchor.json", "utf8")
  );

  // Address of the deployed program.
  const programId = new anchor.web3.PublicKey(
    "GXFtM6h99kckybSfyLBDPwh583mDKjSZqTqDYHR5ix5Z"
  );

  // Generate the program client from IDL.
  const program = new anchor.Program(idl, programId);

  // Execute the RPC.
  await program.methods.initialize().rpc();
  // #endregion main
}

console.log("Running client.");
main().then(() => console.log("Success"));
