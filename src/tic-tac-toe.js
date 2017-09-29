class TicTacToe {
    constructor() {
this.currentSymbol = 'x';
    this.succ = undefined;
    this.row0 = {
        a: null,
        b: null,
        c: null
 };
        
        this.row1 = {
        a: null,
        b: null,
        c: null
 };
        
        this.row2 = {
        a: null,
        b: null,
        c: null
 };
    
}

 getCurrentPlayerSymbol() {     
return this.currentSymbol;
        }

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex === 0) {
            if (columnIndex == 0 ) {   
                if (this.row0.a == null) {
                 this.row0.a = this.currentSymbol;
                 this.succ = 2;
                
                 }
            } ;

                 if (columnIndex == 1) {
                   if (this.row0.b == null) {
                 this.row0.b = this.currentSymbol;
                 this.succ = 2;
                
                 }  
             };
            
          if (columnIndex == 2 ) {
                if (this.row0.c == null) {
                 this.row0.c = this.currentSymbol;
                 this.succ = 2;
                
                 }
            } ;     
        };
        
     if (rowIndex == 1) {
            if (columnIndex == 0 ) {
                if (this.row1.a == null) {
                 this.row1.a = this.currentSymbol;
                 this.succ = 2;
                 }
            } ;

         if (columnIndex == 1) {
                   if (this.row1.b == null) {
                 this.row1.b = this.currentSymbol;
                 this.succ = 2;
                 }  
             };
            
          if (columnIndex == 2 ) {
                
                if (this.row1.c == null) {
                 this.row1.c = this.currentSymbol;
                 this.succ = 2;
                 }
            } ;     
        };
        
        
              if (rowIndex == 2) {
           
            if (columnIndex == 0 ) {
                
                if (this.row2.a == null) {
                 this.row2.a = this.currentSymbol;
                 this.succ = 2;
                 }
            } ;

                 if (columnIndex == 1) {
                   if (this.row2.b == null) {
                 this.row2.b = this.currentSymbol;
                 this.succ = 2;
                 }  
             };
            
          if (columnIndex == 2 ) {
                
                if (this.row2.c == null) {
                 this.row2.c = this.currentSymbol;
                 this.succ = 2;
                 }
            } ;     
        };
        
 if (this.succ) {
     if (this.currentSymbol === 'o' ) {
    this.currentSymbol = 'x';
this.succ = undefined;
} else {
    this.currentSymbol = 'o';
    this.succ = undefined;
}    
 }       
        return this.currentSymbol;
    }

    isFinished() {
        if ( this.row0.a == this.row0.b && this.row0.a == this.row0.c && this.row0.a !==null)
              return true;
        if ( this.row1.a == this.row1.b && this.row1.a == this.row1.c && this.row1.a !==null )
              return true;
        if (  this.row2.a == this.row2.b && this.row2.a == this.row2.c && this.row2.a !==null)
              return true;
        if ( this.row0.a == this.row1.a && this.row0.a == this.row2.a && this.row0.a !==null)
              return true;
        if ( this.row0.b == this.row1.b && this.row0.b == this.row2.b && this.row0.b !==null)
              return true;
        if ( this.row0.c == this.row1.c && this.row0.c == this.row2.c && this.row0.c !==null)
              return true;
        if ( this.row0.a == this.row1.b && this.row0.a == this.row2.c && this.row0.a !==null)
              return true;
        if ( this.row0.c == this.row1.b && this.row0.c == this.row2.a && this.row0.c !==null)
              return true;
        
        if (this.row0.a !== null && this.row0.b !== null && this.row0.c !== null && this.row1.a !== null && this.row1.b !== null && this.row1.c !== null && this.row2.a !== null && this.row2.b !== null && this.row2.c !== null )
            return true;
        return false;
    }

    getWinner() {
        
          if ( this.row0.a == this.row0.b && this.row0.a == this.row0.c && this.row0.a !==null)
              return this.row0.a;
        if ( this.row1.a == this.row1.b && this.row1.a == this.row1.c && this.row1.a !==null )
              return this.row1.a;
        if (  this.row2.a == this.row2.b && this.row2.a == this.row2.c && this.row2.a !==null)
              return this.row2.a;
        if ( this.row0.a == this.row1.a && this.row0.a == this.row2.a && this.row0.a !==null)
              return this.row0.a;
        if ( this.row0.b == this.row1.b && this.row0.b == this.row2.b && this.row0.b !==null)
              return this.row0.b;
        if ( this.row0.c == this.row1.c && this.row0.c == this.row2.c && this.row0.c !==null)
              return this.row0.c;
        if ( this.row0.a == this.row1.b && this.row0.a == this.row2.c && this.row0.a !==null)
              return this.row0.a;
        if ( this.row0.c == this.row1.b && this.row0.c == this.row2.a && this.row0.c !==null)
              return this.row0.c;
        return null;
    }

    noMoreTurns() {
if (this.row0.a !== null && this.row0.b !== null && this.row0.c !== null && this.row1.a !== null && this.row1.b !== null && this.row1.c !== null &&this.row1.a !== null && this.row1.b !== null && this.row1.c !== null ) {
    return true;
} else {
    return false;}
    }

    isDraw() {
        if ( this.row0.a == this.row0.b && this.row0.a == this.row0.c ||
         this.row1.a == this.row1.b && this.row1.a == this.row1.c ||
         this.row2.a == this.row2.b && this.row2.a == this.row2.c ||
         this.row0.a == this.row1.a && this.row0.a == this.row2.a ||
         this.row0.b == this.row1.b && this.row0.b == this.row2.b ||
         this.row0.c == this.row1.c && this.row0.c == this.row2.c ||
         this.row0.a == this.row1.b && this.row0.a == this.row2.c ||
         this.row0.c == this.row1.b && this.row0.c == this.row2.a 
       ) {
            return false;
        }
        
        if (this.row0.a == null || this.row0.b == null || this.row0.c == null || this.row1.a == null || this.row1.b == null || this.row1.c == null || this.row2.a == null || this.row2.b == null || this.row2.c == null )
  {
            return false;
        }
        return true;
    }
    
    getFieldValue(rowIndex, colIndex) {
        
if (rowIndex === 0) {
            if (colIndex == 0 ) 
                return this.row0.a;
                 
             if (colIndex == 1) 
                { return this.row0.b} else 
          return this.row0.c   
        };
 if (rowIndex === 1) {
           
            if (colIndex == 0 ) 
                return this.row1.a;
                 
             if (colIndex == 1) 
             {return this.row1.b} else 
          return this.row1.c   
        };       
  if (rowIndex === 2) {
           
            if (colIndex == 0 ) 
                return this.row2.a;
                 
             if (colIndex == 1) 
             {return this.row2.b} else 
          return this.row2.c   
        };      
        };    
    }

module.exports = TicTacToe;