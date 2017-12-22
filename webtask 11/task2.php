<!DOCTYPE html>
<html>
	<head>
		<style>
			.main{
				display:flex;
				flex-direction:row;
				width:450px;
				border:2px solid black;
				border-radius: 10px;
			}
			.left{margin-left:30px;}
			img{margin-left:10px;margin-top:10px;}
		</style>
	</head>
	<body>
		<form action="qqq2.php">
			<select name="qq">
				<option value="3">BMW</option>
				<option value="2">audi</option>
				<option value="1">mercedes</option>
			</select>
			<input type="submit" value="Submit"/>
		</form>
		<?php 
		$con=mysqli_connect("127.0.0.1","root","","hw11");
		$sql="select * from cars,Makers WHERE cars.maker_id=Makers.id";
		$b=$_GET["qq"];
		$query=mysqli_query($con,$sql);
		$num=mysqli_num_rows($query);
		for ($i=0; $i <$num ; $i++) {
			$result=mysqli_fetch_array($query);
			$img=$result['image'];
			$img2=base64_encode($img);
			$maker=$result['maker_id'];
			$model=$result['model'];
			$price=$result['price'];
			if($maker===$b){
				print '
				<div class="main">
					<img src="data:image;base64,'.$img2.'" width=150 height=100/>
					<div class="left">
						<p> '.$maker.' '.$model.'</p>
						<p> Year: 2011 </p>
						<p> Price: '.$price.'tg.</p>
					</div>
				</div><br/>';
			}
		}
		?>
	</body>
</html>