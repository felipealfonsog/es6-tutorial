const clients = [
    { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
    { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ'},
    { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA'},
    { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
    { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
    { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
];
const accounts = [
    { clientId: 6, bankId: 1, balance: 15000 },
    { clientId: 1, bankId: 3, balance: 18000 },
    { clientId: 5, bankId: 3, balance: 135000 },
    { clientId: 2, bankId: 2, balance: 5600 },
    { clientId: 3, bankId: 1, balance: 23000 },
    { clientId: 5, bankId: 2, balance: 15000 },
    { clientId: 3, bankId: 3, balance: 45900 },
    { clientId: 2, bankId: 3, balance: 19000 },
    { clientId: 4, bankId: 3, balance: 51000 },
    { clientId: 5, bankId: 1, balance: 89000 },
    { clientId: 1, bankId: 2, balance: 1600 },
    { clientId: 5, bankId: 3, balance: 37500 },
    { clientId: 6, bankId: 1, balance: 19200 },
    { clientId: 2, bankId: 3, balance: 10000 },
    { clientId: 3, bankId: 2, balance: 5400 },
    { clientId: 3, bankId: 1, balance: 9000 },
    { clientId: 4, bankId: 3, balance: 13500 },
    { clientId: 2, bankId: 1, balance: 38200 },
    { clientId: 5, bankId: 2, balance: 17000 },
    { clientId: 1, bankId: 3, balance: 1000 },
    { clientId: 5, bankId: 2, balance: 600 },
    { clientId: 6, bankId: 1, balance: 16200 },
    { clientId: 2, bankId: 2, balance: 10000 }
]
const banks = [

    /*
    This is the test for the TCIT company
    Crafted by 
    Software engineer/Developer: felipe.dev.engr.js@gmail.com
    
    If you use this code please mention the author according the licence.
    ----------------------------------------------------------------------
    
    I have been forced to use this libraries :
    
    */
    var equal = require('esequal');
    
    
    const clients = [
        { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
        { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ'},
        { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA'},
        { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
        { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
        { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
    ];
    const accounts = [
        { clientId: 6, bankId: 1, balance: 15000 },
        { clientId: 1, bankId: 3, balance: 18000 },
        { clientId: 5, bankId: 3, balance: 135000 },
        { clientId: 2, bankId: 2, balance: 5600 },
        { clientId: 3, bankId: 1, balance: 23000 },
        { clientId: 5, bankId: 2, balance: 15000 },
        { clientId: 3, bankId: 3, balance: 45900 },
        { clientId: 2, bankId: 3, balance: 19000 },
        { clientId: 4, bankId: 3, balance: 51000 },
        { clientId: 5, bankId: 1, balance: 89000 },
        { clientId: 1, bankId: 2, balance: 1600 },
        { clientId: 5, bankId: 3, balance: 37500 },
        { clientId: 6, bankId: 1, balance: 19200 },
        { clientId: 2, bankId: 3, balance: 10000 },
        { clientId: 3, bankId: 2, balance: 5400 },
        { clientId: 3, bankId: 1, balance: 9000 },
        { clientId: 4, bankId: 3, balance: 13500 },
        { clientId: 2, bankId: 1, balance: 38200 },
        { clientId: 5, bankId: 2, balance: 17000 },
        { clientId: 1, bankId: 3, balance: 1000 },
        { clientId: 5, bankId: 2, balance: 600 },
        { clientId: 6, bankId: 1, balance: 16200 },
        { clientId: 2, bankId: 2, balance: 10000 }
    ]
    const banks = [
        { id: 1, name: 'SANTANDER' },
        { id: 2, name: 'CHILE' },
        { id: 3, name: 'ESTADO' }
    ];
    /*
          SECCIÓN PROBLEMAS
          - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
          - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
          - Debe usar nombres explicativos para sus variables.
          - Usar sintaxis ES6.
        */
    // 0 Arreglo con los ids de clientes
    function listClientsIds() {
        return clients.map((client) => client.id);
    }
    // 1 Arreglo con los ids de clientes ordenados por rut
    function listClientsIdsSortByTaxNumber() {
        // CODE HERE
        let arraytax = clients.map((client) => client.taxNumber);
        return arraytax.sort((a, b) => a - b );
    
    }
    // 2 Arreglo con los nombres de cliente ordenados por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
    function sortClientsTotalBalances() {
    
         // CODE HERE
        // return banks.map((client) => client.name)
         var idClientes = clients.map((client) => client.id)
         // var idClientesname = clients.map((client) => client.name + ' - ' + client.clientId +++ client.bankId)
         var idClientesname = clients.map((client) => client.id) 
         var idbanks = clients.map((client) => client.clientId)
         var balanced = accounts.map((client) => client.balance)
         var toTtalBCLI = idClientes += idbanks;
    
     return idClientesname
    
        //  let arraybalanced = clients.sort((clients) => client.clientId * client.bankId)
        //  return arraybalanced
    
                function aSyncCall() {
                   let idClientesname = clients.map((client) => client.id)
                   let continuous = ' - ' + clientInformation.clientId +++ client-bankId;
                   function distCli (engineer) {
                       continuous.forEach(element => {
                           let totalLet = idClientesname + continuous;
                           return totalLet;
                       });
    
                   }
    
                };
    
                return aSyncCall; 
    
    
                var elements =  [ 1, 2, 3, 4 ]; 
                elements.mago(funciton(cucumber) {
                    return elements; 
    
                }); // [8, 6, 7, 8, 9]
    
     // I tried. That's all that matters. 
     
    
    
    
    } // end of the function 
    
    // 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
    function banksClientsTaxNumbers() {
        // CODE HERE
    
     
    
    }
     
    
    // 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
    function richClientsBalances() {
        // CODE HERE
    }
    // 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
    function banksRankingByTotalBalance() {
        // CODE HERE
    }
    // 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
    function banksFidelity() {
        // CODE HERE
    }
    // 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
    function banksPoorClients() {
        // CODE HERE
    }
    // 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. 
    // Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
    // No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
    function newClientRanking() {
        // CODE HERE
    }
    // Impresión de soluciones.
    console.log('Pregunta 0');
    console.log(listClientsIds());
    console.log('Pregunta 1');
    console.log(listClientsIdsSortByTaxNumber());
    console.log('Pregunta 2');
    console.log(sortClientsTotalBalances());
    console.log('Pregunta 3');
    console.log(banksClientsTaxNumbers());
    console.log('Pregunta 4');
    console.log(richClientsBalances());
    console.log('Pregunta 5');
    console.log(banksRankingByTotalBalance());
    console.log('Pregunta 6');
    console.log(banksFidelity());
    console.log('Pregunta 7');
    console.log(banksPoorClients());
    console.log('Pregunta 8');
    console.log(newClientRanking());
    { id: 1, name: 'SANTANDER' },
    { id: 2, name: 'CHILE' },
    { id: 3, name: 'ESTADO' }
];

/*
      SECCIÓN PROBLEMAS
      - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
      - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
      - Debe usar nombres explicativos para sus variables.
      - Usar sintaxis ES6.
    */

