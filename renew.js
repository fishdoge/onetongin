var fs = require('fs');


function createMetadata(){

    const normal = ["blue.png","green.png","red.png","orange.png","yellow.png"];
    const rare = ["btc.png","eth.png","solana.png"];

    let rar;
    let gold;

    for(var a=1;a<=2000;a++){

        if(getRandomInt>95){
            var image = 'https://ipfs.io/ipfs/QmVJgzbBgHVfcrY8fCHradsibAECTtz8omPs13axfNSGkx';
            rar = "rare";
            gold = 3;

        }else if(getRandomInt>80){

            var image = 'https://ipfs.io/ipfs/QmVJgzbBgHVfcrY8fCHradsibAECTtz8omPs13axfNSGkx/'+rare[a%3];   
            rar = "epic";
            gold = 5;
        }else{
            var image = 'https://ipfs.io/ipfs/QmVJgzbBgHVfcrY8fCHradsibAECTtz8omPs13axfNSGkx/'+normal[a%5];
            rar = "nomarl";
            gold = 1;
        }

        var fileName = String(a);

        var names = 'A Cup of Money #'+a;
        var description = 'One Ton Gin club is a club that all members have a cup of mmoney,and Happy';
       


        var Attributes = [
            {
                trait_type:"Money",
                value:gold
            },
            {
                trait_type:"Rarity",
                value:rar
            }
        ];

        

        var obj = {
            name:names,
            description:description,
            image:image,
            attributes:Attributes
        };


        
    
        
        fs.writeFile('./TonMetadata/'+fileName,  JSON.stringify(obj), function (err) {
            if (err)
                console.log(err);
            else
                console.log('Write operation complete.');
        });

        //console.log(JSON.stringify(obj));

    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 100);
}

createMetadata();
  
