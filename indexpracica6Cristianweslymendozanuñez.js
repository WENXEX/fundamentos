<!DOCTYPEhtml >
< html  lang =" es " >
< cabeza >
    < juego de caracteres meta  =" UTF-8 " >
    < meta  http-equiv =" X-UA-Compatible " content =" IE=edge " >
    < meta  name =" viewport " content =" ancho=ancho-del-dispositivo, escala-inicial=1.0 " >
    < título > Practica 6 </ título >
</ cabeza >
< cuerpo >
    < guión >
        
        //================================== VÍDEO 37=========== ======================================//
        /*9)Programa una función que obtiene un número aleatorio 501 y 600*/
        const  casualidad  =  ( )  =>  consola . info ( Math . round ( ( Math . random ( ) * 100 ) + 500 ) ) ;
        aleatorio ( ) ;
        /*10) Programa una función que recibe un número y evalúa si es capicúa o no(que se lee igual en un sentido
        que en otro),pe.Funcion(2002) devolverá true*/
        
        const  capicua  =  ( numero  =  0 )  => {
            if ( ! numero )  regresa  consola . advertir ( "No ingresaste un número" ) ;

            if ( typeof  numero  !== "number" ) return  console . error ( `El valor " ${ numero } " ingresado, No es un
            número` ) ;

            número  =  número . a la cadena ( ) ;
            sea  ​​alReves  =  numero . dividir ( "" ) . inversa ( ) . unirse ( "" ) ;

            volver ( numero  ===  alReves )
            ? consola _ info ( `Sí es capícua, Número original ${ numero } , Número al revés ${ alReves } ` )
            : consola . info ( `No es capícua, Número original ${ numero } , Número al revés ${ alReves } ` )
        }

        capicúa ( ) ;
        capicúa ( "10" ) ;
        capicúa ( { } ) ;
        capicua ( 2000 ) ;
        capicua ( 2002 ) ;
        capicúa ( 18,99 ) ;
        capicua ( 212.212 ) ;

       

        /*11) Programa una función que calcule el factorial de un número (El factorial de un entero
        positivo,se define como el producto de todos los números enteros positivos desde 1 hasta n),pe.miFuncion(5) devolverá 120
        */
        const  factorial  =  ( numero  =  indefinido )  =>  {
            if  ( numero  ===  indefinido ) regresa  consola . advertir  ( "No ingresaste un número" ) ;
            
            if  ( typeof  numero !== "number" ) return  console . error ( `El valor " ${ numero } "ingresado, No es un número` ) ;

            if  ( numero  ===  0 )  regresa  consola . error ( "El número no puede ser 0" ) ;

            if  ( Math . sign ( numero )  ===  - 1 )  regresa  consola . error ( "El número no puede ser negativo" ) ;

            sea  ​​factorial  =  1 ;

            for ( sea  i  =  numero ;  i  >  1 ;  i -- ) {
            factorial  *=  i ;
            }

             consola de retorno . info ( `El factorial de ${ numero } es ${ factorial } ` ) ;
        }
        factoriales ( ) ;
        factorial ( "5" ) ;
        factorial ( [ 1 , 2 , 3 ] ) ;
        factorial ( 0 ) ;
        factoriales ( -5 ) ; _
        factoriales ( 5 ) ;
        factoriales ( 8 ) ;
          //================================== VÍDEO 39=========== ======================================//
   
        /*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
        o no, pe. miFuncion(7) devolverá true.*/
        const  numeroPrimo  =  ( numero  =  indefinido )  =>  {
            if  ( numero  ===  indefinido )  regresa  consola . advertir ( "No ingresaste un número" ) ;
            
            if  ( typeof  numero !== "number" ) return  console . error ( `El valor " ${ numero } " ingresado, No es un número` ) ;

            if  ( numero  ===  0 )  regresa  consola . error ( "El número no puede ser 0" ) ;

            if  ( numero  ===  1 )  regresa  consola . error ( "El número no puede ser 1" ) ;

            if  ( Math . sign ( numero )  ===  - 1 )  regresa  consola . error ( "El número no puede ser negativo" ) ;

            sea  ​​divisible  =  falso ;

            for ( sea  i  =  2 ;  i  <  numero ;  i ++ ) {
                if  ( ( numero  %  i )  ===  0 ) {
                    divisible  =  verdadero ;
                    romper ;
                }
            }

            retorno  ( divisible )
            ? consola _ log ( `El numero ${ numero } , No es primo` )
            : consola . log ( `El número ${ numero } , Sí es primo` ) ;
        }
        numeroPrimo ( ) ;
        numeroPrimo ( "320" ) ;
        numeroPrimo ( verdadero ) ;
        numeroPrimo ( 0 ) ;
        numeroPrimo ( 1 ) ;
        numeroPrimo ( -13 ) ; _
        numeroPrimo ( 13 ) ;
        numeroPrimo ( 200 ) ;
        /*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
        const  numeroParimpar  =  ( numero  =  indefinido )  =>  {
            if  ( numero  ===  indefinido )  regresa  consola . advertir ( "No ingresaste un número" ) ;
            
            if  ( typeof  numero !== "number" ) return  console . error ( `El valor " ${ numero } " ingresado, No es un número` ) ;

            retorno  ( ( numero  %  2 )  ===  0 )
            ? consola _ log ( `El numero ${ numero } , es Par` )
            : consola . log ( `El número ${ numero } , es Impar` ) ;
        }
        numeroParimpar ( ) ;
        numeroParimpar ( "23" ) ;
        numeroParimpar ( -398 ) ; _
        numeroParimpar ( 19 ) ;

        /*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F*/

        const  convertirGrados  =  ( grados  =  indefinido ,  unidad  =  indefinido )  =>  {
            if  ( grados  ===  indefinido )  devuelve  consola . advertir ( "No ingresaste grados a convertir" ) ;
            
            if  ( typeof  grados !== "number" ) return  console . error ( `El valor " ${ grados } " ingresado, No es un número` ) ;

            if  ( unidad  ===  indefinido ) regresa  consola . advertir ( "No ingresaste convertir el tipo de grado a" ) ;

            if  ( typeof  unidad  !==  "string" ) return  console . error ( `El valor " ${ grados } " ingresado, No es una cadena de texto` ) ;

            if ( unidad . length  !==  1 || ! / ( C | F ) / . test ( unidad ) )  return  console . advertir ( "Valor de unidad no reconocido" ) ;

            if  ( unidad  ===  "C" ) {
                 consola de retorno . info ( ` ${ grados } °C = ${ Math . round ( ( grados * ( 9 / 5 ) ) + 32 ) } °C` ) ;
            }
              otra cosa  si  ( unidad  ===  "F" ) {
                 consola de retorno . info ( ` ${ grados } °F = ${ Math . round ( ( ( grados - 32 ) * ( 5 / 9 ) ) ) } °C` ) ; 
              }
                más {
                     consola de retorno . erro ( "El tipo de grados a convertir No es valido" ) ;
                }
       }
       convertirGrados ( ) ;
       convertirGrados ( "2" ) ;
       convertirGrados ( 2 ) ;
       convertirGrados ( 2 , true ) ;
       convertirGrados ( 2 , "Hola" ) ;
       convertirGrados ( 2 , "E" ) ;
       convertirGrados ( 0 , "C" ) ;
       convertirGrados ( 100 , "C" ) ;
         //================================== VÍDEO 39=========== ======================================//
       /*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10*/
       const  convertirBinarioDecimal  =  ( numero  =  indefinido ,  base  =  indefinido )  =>  {
            if  ( numero  ===  indefinido )  regresa  consola . advertir ( "No ingresaste el número a convertir" ) ;
            
            if  ( typeof  numero !== "number" ) return  console . error ( `El valor " ${ numero } " ingresado, No es un número` ) ;

            if  ( base  ===  indefinido ) devuelve  la consola . advertir ( "No ingresaste la base a convertir" ) ;

            if  ( tipo  de base  ! ==  "número" ) devuelve  consola . error ( `El valor " ${ base } " ingresado, No es un número` ) ;

            si ( base  ===  2 ) {
                 consola de retorno . info ( ` ${ numero } base ${ base } = ${ parseInt ( numero , base ) } base 10` ) ;
            }
               si  no ( base  === 10 ) { 
                 consola de retorno . info ( ` ${ numero } base ${ base } = ${ numero . toString ( ( base ) ) } base 2` ) ;
              }
                más {
                     consola de retorno . error ( "El tipo de base a convertir no es valido" ) ;
                }
       }
       convertirBinarioDecimal ( ) ;
       convertirBinarioDecimal ( "2" ) ;
       convertirBinarioDecimal ( 100 ) ;
       convertirBinarioDecimal ( 100 ,  "2" ) ;
       convertirBinarioDecimal ( 100,2 ) ; _ _
       convertirBinarioDecimal ( 1110010,2 ) ; _ _
       convertirBinarioDecimal ( 4 , 10 ) ;
       convertirBinarioDecimal ( 114 , 10 ) ;
       convertirBinarioDecimal ( 114,3 ) ; _ _
       /*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/
        const  aplicarDescuento  =  ( monto  =  indefinido ,  descuento  =  0 )  =>  {
            if  ( monto  ===  indefinido )  devuelve  consola . advertir ( "No ingresaste el monto" ) ;
            
            if  ( typeof  monto !== "number" ) return  console . error ( `El valor " ${ monto } " ingresado, No es un número` ) ;

            if  ( monto  ===  0 )  devuelve  consola . error ( "El monto no puede ser 0" ) ;

            if  ( Math . sign ( monto )  ===  - 1 )  devuelve  consola . error ( "El monto no puede ser negativo" ) ;

            if  ( typeof  descuento  !==  "number" )  return  console . error ( `El valor " ${ descuento } " ingresado, No es un número` ) ;

            if  ( Math . sign ( descuento ) === - 1 ) devuelve  consola . error ( "El descuento no puede ser negativo" ) ;

             consola de retorno . info ( ` ${ monto } - ${ descuento } % = ${ monto  -  ( ( monto * descuento ) / 100 ) } ` )

        }
        aplicarDescuento ( ) ;
        aplicarDescuento ( "200" ) ;
        aplicarDescuento ( 0 ) ;
        aplicarDescuento ( -1000 ) ; _
        aplicarDescuento ( 1000 , "20" ) ;
        aplicarDescuento ( 1000 , -20 ) ; _
        aplicarDescuento ( 1000 ) ;
        /*17) Programa una función que dada una fecha válida determine cuántos años han pasado hasta el día de hoy,
         Educación física. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020)*/
         const  calcularAnios  =  ( fecha  =  indefinido )  =>  {
             if  ( fecha  ===  indefinido )  devuelve  consola . advertir  ( "No ingresaste la fecha" ) ;

             if ( ! ( fecha  instancia de  Fecha ) )  devuelve  consola . error ( "El valor que ingresaste no es una fecha válida" ) ;


             let  hoyMenosFecha  =  nueva  Fecha ( ) . getTime ( )  -  fecha . obtenerHora ( ) ,
             aniosEnMS  =  1000  *  60  *  60  *  24  * 365
             aniosHumanos  =  Math . piso ( hoyMenosFecha  /  aniosEnMS ) ;

             return ( Math . sign ( aniosHumanos ) === - 1 )
             ? consola _ info ( `Faltan ${ Math . abs ( aniosHumanos ) } años para el ${ fecha . getFullYear ( ) } . ` )
             : ( Math . sign ( aniosHumanos ) ===  1 )
                ? consola _ info ( `Han pasado ${ aniosHumanos } años, desde ${ fecha . getFullYear ( ) } .` )
                : consola . info ( `Estamos en el año actual ${ fecha . getFullYear ( ) } .` )
         }
         calcularAnios ( ) ;
         calcularAnios ( { } ) ;   
         calcularAnios ( falso ) ;
         calcularAnios ( nueva  Fecha ( ) ) ;
         calcularAnios ( nueva  Fecha ( 1984 ,  4 ,  23 ) ) ;
         calcularAnios ( nueva  Fecha ( 1884 ,  4 ,  23 ) ) ;
         calcularAnios ( nueva  Fecha ( 2084 ,  4 ,  23 ) ) ;

      

    </ guión >
</ cuerpo >
</ html >