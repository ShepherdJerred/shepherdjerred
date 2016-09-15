name := "shepherdjerred"

version := "1.0"

lazy val `shepherdjerred` = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( javaJdbc ,  cache , javaWs )

libraryDependencies += "com.sparkpost" % "sparkpost-lib" % "0.16.1"

libraryDependencies += "commons-validator" % "commons-validator" % "1.4.0"

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"