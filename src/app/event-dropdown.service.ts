import { Injectable } from '@angular/core';

@Injectable()
export class EventDropdownService {
  
  data:any; 

  constructor() 
  {  
  
  }
  getNameList() 
  {
    return this.data=[    
      {    
        "Id": 1,    
        "Name": "Marriage"    
      },    
      {    
        "Id": 2,    
        "Name": "House Warming"    
      },  
      {    
        "Id": 3,    
        "Name": "Christening"    
      },  
      {    
        "Id": 4,    
        "Name": "Betrothal"    
      },  
    ] ;
  }
  
}
