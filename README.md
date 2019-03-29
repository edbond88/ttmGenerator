####Easy generation of NMEA 0183 TTM sequences based on target coordinates and receiver coordinates

#####How it works

The service generates a **Target Distance** and **Bearing from own ship**. 

**Target speed** and **Target Course** is set manually in the form.

The remaining parameters use the default values. 

Checksum **not** generated.

#####TTM  = [Tracked Target Message](http://www.catb.org/gpsd/NMEA.html#_ttm_tracked_target_message)

Data associated with a tracked target relative to own ship's position.

```
$--TTM,xx,x.x,x.x,a,x.x,x.x,a,x.x,x.x,a,c--c,a,a*hh

$RATTM,02,6.38,322.1,T,0.92,186.3,T,4.25,320.8,N,L,,M*0D

1  = Target Number
2  = Target Distance
3  = Bearing from own ship
4  = Bearing Units
5  = Target speed
6  = Target Course
7  = Course Units
8  = Distance of closest-point-of-approach
9  = Time until closest-point-of-approach "-" means increasing
10 = "-" means increasing
11 = Target name
12 = Target Status
13 = Reference Target
14 = Checksum
```

###Attention!
With each new target, the creation time increases. This is a bug.
