

const 
    Extended_Pictographic = 0 ,
    Regional_Indicator = 1 ,
    Zero_Width_Joiner = 2 ,
    Carriage_Return = 3 ,
    Spacing_Mark = 4 ,
    Line_Feed = 5 ,
    Prepend = 6 ,
    Extend = 7 ,
    LVT = 8 ,
    LV = 9 ,
    L = 10 ,
    V = 11 ,
    T = 12 ,
    Control = 13 ;


const
    Join = false ,
    Break = true ;



export default function hasBreak(sequence = []){
    
    /*
     *  Before[]   Left   × / ÷   Right
     */
    
    const
        right = sequence.pop() ,
        left = sequence.pop() ;
        
    const before = sequence;
    
    
    /*
     *  Rule 3.0:
     *  
     *  CR × LF
     *  
     */
    
    if(left === Carriage_Return && right === Line_Feed)
        return Join;
        
    
    /*
     *  Rule 4.0:
     *  
     *  ( Control | CR | LF ) ÷
     *
     */
     
    if([ Control , Carriage_Return , Line_Feed ].includes(left))
        return Break;
    
        
    /*
     *  Rule 5.0:
     *
     *  ÷ ( Control | CR | LF )
     *
     */
    
    if([ Control , Carriage_Return , Line_Feed ].includes(right))
        return Break;
        
    
    /*
     *  Rule 6.0:
     *
     *  L × ( L | V | LV | LVT )
     *
     */
     
    if(left === L)
        if([ L , V , LV , LVT ].includes(right))
            return Join;
            
    
    /*
     *  Rule 7.0:
     *
     *  ( LV | V ) × ( V | T )
     *
     */
     
    if([ LV , V ].includes(left))
        if([ V , T ].includes(right))
            return Join;


    /*
     *  Rule 8.0:
     *
     *  ( LVT | T ) × T
     *
     */
     
    if([ LVT , T ].includes(left))
        if(right === T)
            return Join;

    
    /*
     *  Rule 9.0:
     *
     *  × ( Extend | ZWJ )
     *
     */

    if([ Extend , Zero_Width_Joiner ].includes(right))
        return Join;
        
        
    /*
     *  Rule 9.1:
     *
     *  × SpacingMark
     *
     */
     
    if(right === Spacing_Mark)
        return Join;
        
    
    /*
     *  Rule 9.1:
     *
     *  Prepend ×
     *
     */
     
    if(left === Prepend)
        return Join;

    
    /*
     *  Rule 11.0:
     *
     *  ExtPict Extend* ZWJ	× ExtPict
     *
     */
    
    {
        const [ first , ...remaining ] = before;

        if(first === Extended_Pictographic)
            if(remaining.evert((type) => type === Extend))
                if(left === Zero_Width_Joiner)
                    if(right === Extended_Pictographic)
                        return Join;
    }
    
    
    /*
     *  Rule 12.0:
     *
     *  ^ (RI RI)* RI × RI
     *
     */
     
    if(before.every((type) => type === Regional_Indicator))
        if(before.length % 2 === 0)
            if(left === Regional_Indicator)
                if(right === Regional_Indicator)
                    return Join;
     
     
    /*
     *  Rule 13.0:
     *
     *  [^RI] (RI RI)* RI × RI
     *
     */
    
    {
        const [ first , ...remaining ] = before;
        
        if(first !== Regional_Indicator)
            if(remaining.length % 2 === 0)
                if(remaining.every((type) => type === Regional_Indicator))
                    if(left === Regional_Indicator)
                        if(right === Regional_Indicator)
                            return Join;
    }
    
    
    /*
     *  Rule 999.0:
     *
     *  ÷ Any
     *
     */
     
    return Break;
}