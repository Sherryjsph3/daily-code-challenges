-- given a table invoice_items with the below structure:
--   create table invoice_items (
--       inv_num integer not null,
--       item varchar(10) not null,
--       price integer not nul

-- write a SQL query that returns a list of invoices(inv_num) w the total price of each (sum). the list should be ordered by inv_num(in descending order)

-- inv_num | item | price
--   --------+------+------
--   3       | a    | 10
--   3       | b    | 15
--   1       | c    | 7

--   inv_num | item | price
--   --------+------+------
--   3       | a    | 10
--   3       | b    | 15
--   1       | c    | 7

SELECT inv_num, SUM(price)
FROM invoice_items
GROUP BY inv_num
ORDER BY inv_num DESC;

--solution
-- +---+----+
-- | 3 | 25 |
-- | 1 |  7 |
-- +---+----+


-- +----+----+
-- | 12 |  8 |
-- | 11 | 24 |
-- | 10 | 13 |
-- +----+----+