window.onload=function(){
var pageCounter=1;
var animalContainer=document.getElementById("animal-info")
var bt=document.getElementById("btn");

bt.addEventListener("click",function(){
	var ourRequest=new  XMLHttpRequest();
	ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
	ourRequest.onload=function(){
		var data=JSON.parse(ourRequest.responseText);
		renderHTML(data);
	};

	ourRequest.onerror=function(){
		animalContainer.innerHTML='Sorry Failed to make request';
	}

	ourRequest.send();
	pageCounter++;
	if (pageCounter>3) {
		bt.disabled=true;
	}
}); 

function renderHTML(myData) {
	// body...
	var htmlString="";

	for(i=0;i<myData.length;i++){
		htmlString+="<p>"+myData[i].name+" is a "+myData[i].species +" that likes to eat ";
			for(j=0;j<myData[i].foods.likes.length;j++){
				if(j==0){
					htmlString+=myData[i].foods.likes[j];
				}
				else{
					htmlString+=" and "+myData[i].foods.likes[j];
				}
			}	
		htmlString+=' and dislikes ';
			for(j=0;j<myData[i].foods.dislikes.length;j++){
				if(j==0){
				htmlString+=myData[i].foods.dislikes[j];
				}
				else{
				htmlString+=" and "+myData[i].foods.dislikes[j];
				}
			}	
		htmlString+="</p>"
	}

	animalContainer.insertAdjacentHTML('beforeend',htmlString)
	}

}