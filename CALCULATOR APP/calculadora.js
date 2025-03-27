
        function agregar(valor) {
            document.getElementById('pantalla').value += valor;     /*recibe un numero (valor) y es añadido(no suma) al valor que ya hay en pantalla*/
        }

        function limpiar() {
            document.getElementById('pantalla').value = '';         /*ubica el elemento pantalla y le asigna el valor vacio*/
        }

        function calcular() {
            try {
                document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
                /*toma una cadena de texto que contiene código JavaScript y lo ejecuta como si fuera código normal (si es una operacion lo resuleve).*/
            } catch (error) {
                document.getElementById('pantalla').value = 'Error';
            }
        }

        function retroceder() {
            let valor = document.getElementById('pantalla').value;            /*value solo devuleve lo que esta en pantalla... no un valor resultante*/
            document.getElementById('pantalla').value = valor.substring(0, valor.length - 1);   
            /*Crea una nueva subcadena que empieza en el índice 0  y termina .length - 1*/
        }
    