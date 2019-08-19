$.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.popularmyanmar.com%2Fpopularnews%2Fcategory%2Flocal%2Ffeed', function(data){
    $(".localNews .title").html(data.feed.title);
    $(".localNews .head").html(data.items[0].title);
    $(".localNews .content").html(data.items[0].content);
    $(".localNews a").attr("href", data.items[0].guid)
});
$.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.popularmyanmar.com%2Fpopularnews%2Fcategory%2Fhealth%2Ffeed', function(data){
    $(".internationalNews .title").html(data.feed.title);
    $(".internationalNews .head").html(data.items[0].title);
    $(".internationalNews .content").html(data.items[0].content);
    $(".internationalNews a").attr("href", data.items[0].guid)
});
$.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.popularmyanmar.com%2Fpopularnews%2Fcategory%2Fbussiness%2Ffeed', function(data){
    $(".weatherNews .title").html(data.feed.title);
    $(".weatherNews .head").html(data.items[0].title);
    $(".weatherNews .content").html(data.items[0].content);
    $(".weatherNews a").attr("href", data.items[0].guid);
});
$.get('https://api.rss2json.com/v1/api.json?rss_url=https://www.irrawaddy.com/category/news/feed', function(data){
    $(".ayalocalNews .title").html(data.feed.title);
    $(".ayalocalNews .head").html(data.items[0].title);
    $(".ayalocalNews .content").html(data.items[0].content);
    $(".ayalocalNews a").attr("href", data.items[0].link);
});

var curDate = new Date();
$(".date").html(curDate);
/*$(document).ready(function() {
	//feed to parse
	var feed = "https://api.rss2json.com/v1/api.json?rss_url=" + "https://www.popularmyanmar.com/rss";
	
	$.ajax(feed, {
		accepts:{
			xml:"application/json"
		},
		dataType:"xml",
		success:function(data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

			$(data).find("item").each(function () { // or "item" or whatever suits your feed
				var el = $(this);
				console.log("------------------------");
				console.log("title      : " + el.find("title").text());
				console.log("link       : " + el.find("link").text());
				console.log("description: " + el.find("description").text());
			});
	

		}	
	});
	
});*/