# 1. Init

```
sequelize init 
```

# 2. Create model

```
sequelize model:create --name authorization --attributes "group:string, permission:json"
```

# 3. Migration

```
sequelize db:migrate
```

# 4. Dummy data

```
sequelize seed:generate --name demo-authorization

sequelize db:seed
```

# 5. Clear all

```
sequelize db:migrate:undo:all
```

sequelize model:create --name job_tracking --attributes "plan_arrival_time:date,route:string, tracking_by:string,run_seq:string,truck_license:string,ETA:float,part_usage_time:date,actual_arrival_time:date,status:string,alt_route_hazard_point:json,problem:string,action:string"

sequelize seed:generate --name demo-job-tracking
