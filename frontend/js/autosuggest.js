// https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL= "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchBar= document.getElementById("search-bar");
var searchSuggestion=document.getElementById("search-suggestion");
// get user type data 
// use user typed data in the query in the API call
//API Call
//Append to the search suggestion  to div tag int UI;
searchBar.addEventListener("input",function(){
   var query=searchBar.value.trim();
  // console.log(query);
   fetchSuggestion(query);

})
function fetchSuggestion(query){
    var fullAPI=API_URL+"?q="+query+"&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
      //  console.log(data);
     showSuggestion(data);
    

    })
    .catch(function(err){
        console.log("Error: " + err);
    })
}
function showSuggestion(data){
    var values=data.results;
    if(data.count==0)
    {
        searchSuggestion.innerHTML="<div> NO matching result found</div>";

    }
    else{
        var htmlString="";
        for(var i=0;i<values.length;i++){
            htmlString+="<div><span class='suggestion-item'> "+values[i].text+"</span><span class='suggestion-weight'>"+values[i].weight+"</span></div>";
        }
        searchSuggestion.innerHTML=htmlString;
        
    }
}