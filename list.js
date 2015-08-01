(function() {

	var count = 0;
	
	function List() {
	}

	// List.prototype.init = function(ulEle) {
	// 	console.log(this);
	// 	this.ulList = ulEle;
	// 	this.template = this.ulList.innerHTML;
	// 	this.ulList.innerHTML = "";
	// }

	// List.prototype.add = function() {
	// 	console.log(this);
	// 	var node = document.createElement("li");
	// 	List.ulList.appendChild(node);
	// }

	// -init
	// input : ul element 
	// output : x
	List.prototype.init = function(ulEle, btnAdd, btnDel) {
		this.ulList = ulEle;
		this.template = this.ulList.innerHTML;
		// template내의 {{ }} 안의 애들을 key로 하는 맵 생성 
		this.context;
		this.ulList.innerHTML = "";

		btnAdd.addEventListener("click", this.add.bind(this));
	}

	// -add
	// input :
	// output :
	List.prototype.add = function() {
		var node = document.createElement("li");
		this._setContents(node);
		this.ulList.appendChild(node);
	}

	// -remove 
	// input :
	// output :
	List.prototype.remove = function() {

	}

	List.prototype._setContents = function() {
		// context update
		// template 에 적용 
	}

	window.Listyo = List;

})();

