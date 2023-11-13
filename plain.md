website:
- table:
  - delete
  - insert
  - select
  - update

```sql
grant select on table db_name.* to website@localhost
grant delete on table db_name.* to website@localhost
grant insert on table db_name.* to website@localhost
grant update on table db_name.* to website@localhost
```

migrator:
- table:
  - all

```sql
grant all on table db_name.* to migrator@localhost
```
