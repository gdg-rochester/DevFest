google.charts.load("current", {packages:["corechart"]});
         
         // Food Chart
         google.charts.setOnLoadCallback(drawFoodChart);
         function drawFoodChart() {
           var foodData = google.visualization.arrayToDataTable([
             ['Preference', 'Count'],
             ['Acrocanthosaurus (top-spined lizard)', 12.2],
             ['Albertosaurus (Alberta lizard)', 9.1]
             ]);
         
           var foodOptions = {
             title: 'Food Preferences',
             legend: { position: 'none' },
           };
         
         
           var foodChart = new google.visualization.Histogram(document.getElementById('food_chart'));
           foodChart.draw(foodData, foodOptions);
         }
         
         // Tshirt Chart
         google.charts.setOnLoadCallback(drawTshirtChart);
         function drawTshirtChart() {
           var tshirtData = google.visualization.arrayToDataTable([
             ['Size', 'Count'],
             ['Acrocanthosaurus (top-spined lizard)', 12.2],
             ['Albertosaurus (Alberta lizard)', 9.1]
             ]);
         
           var tshirtOptions = {
             title: 'Tshirt Sizes',
             legend: { position: 'none' },
           };
         
         
           var tshirtChart = new google.visualization.Histogram(document.getElementById('tshirt_chart'));
           tshirtChart.draw(tshirtData, tshirtOptions);
         }
         
         // Topics Chart
         google.charts.setOnLoadCallback(drawTopicsChart);
         function drawTopicsChart() {
           var topicsData = google.visualization.arrayToDataTable([
             ['Topics', 'Count'],
             ['Acrocanthosaurus (top-spined lizard)', 12.2],
             ['Albertosaurus (Alberta lizard)', 9.1]
             ]);
         
         
           var topicsOptions = {
             title: 'Topics',
             legend: { position: 'none' },
           };
         
           var topicsChart = new google.visualization.Histogram(document.getElementById('topics_chart'));
           topicsChart.draw(topicsData, topicsOptions);
         }

         // Promo Code Chart
         google.charts.setOnLoadCallback(drawPromoCodeChart);
         function drawPromoCodeChart() {
           var promoCodeData = google.visualization.arrayToDataTable([
             ['Promo Code', 'Count'],
             ['Acrocanthosaurus (top-spined lizard)', 12.2],
             ['Albertosaurus (Alberta lizard)', 9.1]
             ]);
         
         
           var promoCodeOptions = {
             title: 'Topics',
             legend: { position: 'none' },
           };
         
           var promoCodeChart = new google.visualization.Histogram(document.getElementById('promo_code_chart'));
           promoCodeChart.draw(promoCodeData, promoCodeOptions);
         }

         // Gender Chart
         google.charts.setOnLoadCallback(drawGenderChart);

	      function drawGenderChart() {

	        var genderData = google.visualization.arrayToDataTable([
	          ['Gender', 'Count'],
	          ['Work',     11],
	          ['Eat',      2],
	          ['Commute',  2],
	          ['Sleep',    7]
	        ]);

	        var genderOptions = {
	          title: 'Diversity Inclusion'
	        };

	        var genderChart = new google.visualization.PieChart(document.getElementById('gender_chart'));

	        genderChart.draw(genderData, genderOptions);
	      }

	      // Profession Chart
         google.charts.setOnLoadCallback(drawProfessionChart);

	      function drawProfessionChart() {

	        var professionData = google.visualization.arrayToDataTable([
	          ['Profession', 'Count'],
	          ['Work',     11],
	          ['Eat',      2],
	          ['Sleep',    7]
	        ]);

	        var professionOptions = {
	          title: 'Diversity Inclusion',
	          pieHole: 0.4
	        };

	        var professionChart = new google.visualization.PieChart(document.getElementById('profession_chart'));

	        professionChart.draw(professionData, professionOptions);
	      }
         
         // Referral Chart
         google.charts.setOnLoadCallback(drawReferralChart);

	      function drawReferralChart() {

	        var referralData = google.visualization.arrayToDataTable([
	          ['Profession', 'Count'],
	          ['Work',     11],
	          ['Eat',      2],
	          ['Sleep',    7]
	        ]);

	        var referralOptions = {
	          title: 'Diversity Inclusion',
	          pieHole: 0.4
	        };

	        var referralChart = new google.visualization.PieChart(document.getElementById('referral_chart'));

	        referralChart.draw(referralData, referralOptions);
	      }