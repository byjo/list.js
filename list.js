var count = 0;
var template;

(function () {
	document.addEventListener("DOMContentLoaded", function() {
		var btnAdd = document.getElementById("add");
		var btnRemove = document.getElementById("remove");

		btnAdd.addEventListener("click", addList);
		btnRemove.addEventListener("click", removeList);

		template = document.getElementById("list").innerHTML;
		document.getElementById("list").innerHTML = "";
	});

	function addList() {
		var node = document.createElement("li");
		var content = document.getElementById("listContent").value;
		document.getElementById("listContent").value = "";

		var temp = template.replace("{{count}}", count++);
		node.innerHTML = temp.replace("{{content}}", content);


		//ul.appendChild(node);
		document.getElementById("list").appendChild(node);
	}

	function removeList() {
		var checkedList = [];
		var checkedInput = document.getElementsByTagName("input");
		// checkedList = checkedInput.map(function(item) {
		// 	return item.parentNode;
		// });
		for (var i=0; i<checkedInput.length; i++) {
			if (checkedInput[i].checked)
				//checkedInput[i].parentNode.removeChild(checkedInput[i]);
				checkedList.push(checkedInput[i].parentNode);
		}

		var list = document.getElementById("list");
		for (var i=0; i<checkedList.length; i++) {
			list.removeChild(checkedList[i]);
		}
		
		//document.getElementById("list").removeChild(checkedList);
	}

})();