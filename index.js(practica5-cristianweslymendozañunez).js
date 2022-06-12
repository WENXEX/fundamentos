Sea  Matriz  =  [ [ 1 , 2 , 3 ] ,
    [ 4 , 5 , 6 ] ,
    [ 7 , 8 , 9 ] ] ;
/*
        Guía para realizar mi código
        conca += ""+Matriz[i][j]+ " "; //Código provisto por el profesor Jorge
*/



    función  hacer_salto ( c )
    {
        para ( sea  s  =  0 ;  s <  c ;   s ++ )
            {
                consola _ registro ( "\n" ) ;
            }
    }
    //Matriz original
    consola _ log ( "Arreglo original" ) ;
    for  ( sea  i = 0 ;  i <  longitud de Matriz ; i ++ ) 
    {
        consola _ registro ( Matriz [ i ] ) ;
    }
    función  Mandar_Consola ( Matriz , t )
    {
        cambiar ( t )
        {
            caso  1 :
            {
                consola _ log ( "Arreglo salida 1" ) ;
                sea  ​​conte  =  0 ;
                for  ( sea  i = Matriz . longitud - 1 ;  i >=  0  ;  i -- )
                {

                    conca = " "
                    conteo ++ ;
                    for  ( sea  j = Matriz [ 0 ] . longitud - 1 ;  j  >= 0  ;  j -- )
                    {
                        conca  +=  "" + Matriz [ i ] [ j ] +  " " ;
                    }
                    conca  +=  "\n"
                    consola _ tronco ( conca ) ;
                } 
                hacer_salto ( 3 ) ;
                romper ;

            }
            caso  2 :
            {
                consola _ log ( "Arreglo salida 2" ) ;

                let  conca  =  "" ;
                for  ( sea  i = 0 ;  i < longitud de Matriz ; i ++ ) 
                {   
                
                    conca  +=  "" + Matriz [ 0 ] [ i ] + " " + Matriz [ 1 ] [ i ] + " " + Matriz [ 2 ] [ i ] +  "\n" ;
                
                }
                consola _ tronco ( conca ) ;
                hacer_salto ( 3 ) ;
                romper ;
                
            }
            caso  3 :
            {
                consola _ log ( "Arreglo Salida 3" ) ;
                sea  ​​conca =  ""
                for  ( sea  i = Matriz [ 0 ] . length - 1 ;  i >=  0 ;  i -- )
                {
                        conca = ""
                        for  ( sea  j = Matriz . longitud - 1 ;  j >= 0  ;  j -- ) {
                        conca  +=  "" + Matriz [ j ] [ i ] +  " " ;
                    }
                    conca  +=  ""
                    consola _ tronco ( conca ) ;
                }
                romper ;

            }

        
        }
    }

    Mandar_Consola ( Matriz , 1 ) ;
    Mandar_Consola ( Matriz , 2 ) ;
    Mandar_Consola ( Matriz , 3 ) ;