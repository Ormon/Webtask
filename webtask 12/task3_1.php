		<?php 
		$con=mysqli_connect("127.0.0.1","root","","hw11");
		$sql="select * from `login` where `name`= '".$_GET["Login"]."';";
		$query=mysqli_query($con,$sql);
		$num=mysqli_num_rows($query);
		
		for ($i=0; $i <$num ; $i++) { 
			$result=mysqli_fetch_array($query);
			$img=$result['pass'];
			if($_GET['Password']===$img){
				print ' success';}
		}
		?>
