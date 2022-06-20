const main = async () => {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();

  console.log(`Contract deployed at ${counter.address}`);

  let counts = await counter.getCounts()
  console.log(`Current Counts(1):${counts}`);
  
  await counter.add();
  counts = await counter.getCounts()
  
  console.log(`Current Counts(2):${counts}`);

}

main().then(()=>{
  console.log("sucessed!");
  process.exit(0);
})
.catch((err)=>{
  console.log(err);
  process.exit(1)
})