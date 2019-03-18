package org.baeldung

import scala.concurrent.duration._
import util.Random


import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {
  var name="reactive"
  var url="http://localhost:8080"
  val idFeeder = Iterator.continually(
    Map("randomId" -> Random.nextInt(5000))
  )
  
  val httpProtocol = http
    .baseUrl(url)
  val scn = scenario(name)
      .feed(idFeeder)
      .exec(http(name + "Request").get("/" + name + "?id=${randomId}")
      .check(status.is(200)))
  setUp(    
      scn.inject(rampUsersPerSec(10) to 300 during (60 seconds))
  ).protocols(httpProtocol)
}

class NettySimulation extends ServiceSimulation {
    name="reactive"
	url="http://localhost:8080"
}
class TomcatSimulation extends ServiceSimulation {
    name="blocking"
	url="http://localhost:8080"
}

