// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (number,array) => {
  
  return{
         specimenNum:number,
         dna:array,
         //1.function mutate()
         mutate() {
         let original1stBase = this.dna[0];
         do {
            this.dna[0] = returnRandBase();
         }while(this.dna[0] === original1stBase)

         return this.dna; 
         },
         //2.function compareDNA()
         compareDNA(otherPAequor) {
           let sameCounter = 0;
           for(let i = 0; i < this.dna.length; i++ ){
             if (this.dna[i] === otherPAequor.dna[i]){
             sameCounter ++;  
             }
           }

           let matchPrcentage = (sameCounter/this.dna.length)*100;

          console.log('specimen #1 and specimen #2 have ' + matchPrcentage.toFixed(2) + '% DNA in common.')  
         },
         //3.function willLikelySurvive
         willLikelySurvive() {
           let counter = 0;
           for(let i = 0; i < this.dna.length; i ++){

             if(this.dna[i] === 'C' || this.dna[i] === 'G'){
               counter ++;
             } 
           }
             let c_d_Prcentage = (counter/this.dna.length)*100;
            
           
             if(c_d_Prcentage >= 60){
               console.log(c_d_Prcentage);
               return true;
             }

            return false;   
           
         }
         //
        
  }
}

//const  pAequor1 = pAequorFactory(1,mockUpStrand());
//const  pAequor2 = pAequorFactory(1,mockUpStrand());
//console.log(pAequor1);

//pAequor1.mutate();
//console.log(pAequor2);

//pAequor1.compareDNA(pAequor2);
//console.log(pAequor1.willLikelySurvive());
//console.log(pAequor2.willLikelySurvive());


function creatInstance(num){
  const Instances = [];
  let i = 0;  
  while(Instances.length <= num){
    let pAequor = {};
    
    pAequor = pAequorFactory(i,mockUpStrand());

    if(pAequor.willLikelySurvive()){
    Instances.push(pAequor);
    console.log(pAequor.specimenNum);
    console.log(pAequor.dna);
    }

    i++; 
  }


return Instances;
}

const willLikelySurviveInstance = creatInstance(30);


