function Conta(nome){
	this.nome = nome;
	this.saldo = 0;
	this.extrato = [];
}

Conta.prototype.depositar = function(valor){
	this.saldo += valor;
	this.extrato.push('+'+valor);
};

Conta.prototype.sacar =function(valor){
	this.saldo -= valor;
	this.extrato.push('-'+valor);
},

Conta.prototype.transferir = function(valor, conta2){
	this.sacar(valor);
	conta2.depositar(valor);
}

Conta.prototype.print_all = function(){
	console.log('----------'+this.nome+'-----------')
	console.log('Saldo: '+this.saldo);
	console.log('Extrato:');
	for (i in this.extrato){
		console.log('\t'+this.extrato[i]);
	}
}

function cc(){
	var conta1 = new Conta('Joao');
	var conta2 = new Conta('Maria');

	conta1.depositar(50);
	conta2.depositar(100);
	conta1.transferir(25, conta2);
	conta1.print_all();
	conta2.print_all();
}

////////////// Herança //////////////


// Veiculo
function Veiculo(rodas){
	this.rodas = rodas;
}

Veiculo.prototype.barulho = function(){
	console.log('Barulho desconhecido')
}

Veiculo.prototype.print_all = function(){
	console.log('-----------------');
	console.log('rodas: '+this.rodas);
	this.barulho();
}

// Moto
function Moto(){}

Moto.prototype = new Veiculo(2);

Moto.prototype.barulho = function(){
	console.log("Zuuuum");
}

// Carro
function Carro(){}

Carro.prototype = new Veiculo(4);

Carro.prototype.barulho = function(){
	console.log("Vruuuum");
}

function heranca(){
	var carro = new Carro();
	var moto = new Moto();
	carro.print_all();
	moto.print_all();
}