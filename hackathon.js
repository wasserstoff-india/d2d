const prizeSection = document.getElementById("content");
const polygonBox = document.getElementById("polygon");
const replitBox = document.getElementById("replit");
const filecoinBox = document.getElementById("filecoin");
const solanaBox = document.getElementById("solana");
const d2dBox = document.getElementById("d2d");


function polygon(){
    polygonBox.style.backgroundColor = "#E45A2E";
    replitBox.style.backgroundColor = "transparent";
    filecoinBox.style.backgroundColor = "transparent";
    solanaBox.style.backgroundColor = "transparent";
    d2dBox.style.backgroundColor = "transparent";
    prizeSection.innerHTML = `
    <h1 class="text-2xl font-bold mb-6">Polygon</h1>
            <p class="mb-4"><span class="text-[#3770FF] font-medium">Polygon</span> is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.</p>
            <p class="mb-3">Prizes up for grabs:</p>
            <p class="mb-3 ml-12">₹10,000 for the best hack built on Ethereum, or</p>
            <p class="mb-2 ml-12">₹15,000 for the best hack built on Ethereum + Polygon,</p>
            <p class="mb-3 ml-12">Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</p>
            <p class="mb-3">Read about the bounty details and find code templates for Polygon here:</p>
            <a href="https://nsb.dev/polygon-bounty" class="mb-3 text-[#3770FF] font-medium">https://nsb.dev/polygon-bounty.</p>
    `;
}

function replit(){
    polygonBox.style.backgroundColor = "transparent";
    replitBox.style.backgroundColor = "#E45A2E";
    filecoinBox.style.backgroundColor = "transparent";
    solanaBox.style.backgroundColor = "transparent";
    d2dBox.style.backgroundColor = "transparent";
    prizeSection.innerHTML = `
    <h1 class="text-2xl font-bold mb-6">Replit</h1>
            <p class="mb-4"><span class="text-[#3770FF] font-medium">Replit</span> is the best platform for quickly starting, sharing, and developing projects in any programming language, right from your browser.</p>
            <p class="mb-3">Prizes up for grabs:</p>
            <p class="mb-3 ml-12">5,000 INR to winning project of the hackathon (must be deployed on Replit). <br> Replit schwags to 5 eligible submissions deployed on Replit. <br> Eligibility to apply for internship/full-time roles at Replit</p>
            <p class="mb-3">Read about the bounty details and find code templates for Replit here:</p>
            <a href="https://nsb.dev/replit-bounty" class="mb-3 text-[#3770FF] font-medium">https://nsb.dev/replit-bounty</p>
    `;
}
function filecoin(){
    polygonBox.style.backgroundColor = "transparent";
    replitBox.style.backgroundColor = "transparent";
    filecoinBox.style.backgroundColor = "#E45A2E";
    solanaBox.style.backgroundColor = "transparent";
    d2dBox.style.backgroundColor = "transparent";
    prizeSection.innerHTML = `
    <h1 class="text-2xl font-bold mb-6">Filecoin</h1>
            <p class="mb-1"><span class="text-[#3770FF] font-medium">Filecoin</span> protocol Labs is an open-source R&D lab. They build protocols, tools, and services to radically improve the internet. Their products serve thousands of organizations and millions of people.</p>
            <p class="mb-1">IPFS: IPFS powers the Distributed Web. It's a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.</p>
            <p class="mb-4">Filecoin: An open-source cloud storage marketplace, protocol, and cryptocurrency.</p>
            <p class="mb-3">Prizes up for grabs:</p>
            <p class="mb-3 ml-12">₹20000 for best use of IPFS and/or Filecoin</p>
            <p class="mb-3">Read about the bounty details and find code templates for filecoin here:</p>
            <a href="https://nsb.dev/filecoin-bounty" class="mb-3 text-[#3770FF] font-medium">https://nsb.dev/filecoin-bounty</p>
    `;
}
function solana(){
    polygonBox.style.backgroundColor = "transparent";
    replitBox.style.backgroundColor = "transparent";
    filecoinBox.style.backgroundColor = "transparent";
    solanaBox.style.backgroundColor = "#E45A2E";
    d2dBox.style.backgroundColor = "transparent";
    prizeSection.innerHTML = `
    <h1 class="text-2xl font-bold mb-6">Solana</h1>
            <p class="mb-4"><span class="text-[#3770FF] font-medium">Solana</span> is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.            </p>
            <p class="mb-3">Prizes up for grabs:</p>
            <p class="mb-3 ml-12">young gun - $USDC 100 for the best project beginners just starting out on Solana and/or</p>
            <p class="mb-2 ml-12">rising teknoking - $USDC 250 for the best project that goes into depth, demonstrating higher-order code and/or</p>
            <p class="mb-2 ml-12">master glasseater - $USDC 500 for the best advanced project that is almost ready for full-time development.</p>
            <p class="mb-3 ml-12">Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</p>
            <p class="mb-3">Read about the bounty details and find code templates for Solana here:</p>
            <a href="https://nsb.dev/solana-bounty" class="mb-3 text-[#3770FF] font-medium">https://nsb.dev/solana-bounty</p>
    `;
}

function d2d(){
    polygonBox.style.backgroundColor = "transparent";
    replitBox.style.backgroundColor = "transparent";
    filecoinBox.style.backgroundColor = "transparent";
    solanaBox.style.backgroundColor = "transparent";
    d2dBox.style.backgroundColor = "#E45A2E";
    prizeSection.innerHTML = `
    <h1 class="text-2xl font-bold mb-6">D2D</h1>
            <p class="mb-4"><span class="text-[#3770FF] font-medium">D2D</span> has 6 tracks from which you can chose anyone or multiple and build your product out of that. You can find all the tracks <a class="text-blue-600 underline" href="https://docs.google.com/document/d/1ZHJse2cWcEXDrbCmnFGnexkXj8gVtmsVuUuJmcbssK0/edit?usp=sharing"> here in this document </a>. <br> Each Track has a different prize and will get a equal divisioin from the prize pool which will be disclosed on later stage. All the information about tracks are in the discord. For further question ask in discord. </p>
    `;
}

setInterval(()=>{
    const d = new Date();
    const t = new Date("January 20, 2023 23:59:59")
    if(d>t) document.getElementById('countdown').innerHTML = 'Applications Closed';
    else{
        sec = t.getSeconds() - d.getSeconds();
        min = t.getMinutes() - d.getMinutes();
        hr = t.getHours() - d.getHours();
        date = t.getDate() - d.getDate();
        document.getElementById('countdown').innerHTML = `${date}d:${hr}h:${min}m:${sec}s`;
    }
},1000);