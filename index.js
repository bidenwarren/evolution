incubators
banks
startups
vc
lp

incubator_num = 10
span_number = 150
success_probability = 20
domains = 17
methods = 6

incubators = span(incubator_num)
while(alive){
	startups = spawn(span_number,incubators)
        mutate(startups)
        live(startups,success_probability)
}


func spawn(spawnNum,incubatorsObj){

      foreach(int i=0; i++; i < size(incubatorsObj){
              foreach(int s=0; s++; s < size(incubatorsObj)){
                     foreach(int d=0; d++; d < domains){
                            foreach(int m=0; m++; m < methods){
                                    incubatorsObj[i][s] = new startup(d,m);
              }  
      }   
      
      return incubatorsObj        
}

func live(startupsObj, probObj){
     incubate()
     return  surviving_startups   
}
