/* Requête n°1*/
select CompanyName as 'Société',ContactName as 'contact',ContactTitle as 'Fonction',Phone as 'Téléphone' 
from customers 
where Country ='France';

/* Requête n°2*/
select ProductName as 'Produit', UnitPrice as 'Prix'
from products
join suppliers
on products.SupplierID = suppliers.SupplierID
where CompanyName = 'Exotic Liquids';

/* Requête n°3*/
select CompanyName as 'Fournisseur', count('SupplierID') as 'Nbre produits'
from products
join suppliers
on products.SupplierID = suppliers.SupplierID
where Country = 'France'
group by CompanyName
order by count('SupplierID') desc;

/* Requête n°4*/
select CompanyName as 'Client', count('OrderID') as 'Nbre commandes'
from orders
join customers
on orders.CustomerID = customers.CustomerID
where Country = 'France'
group by CompanyName
having count('orders.OrderID') >10 ;

/* Requête n°5*/
select CompanyName as 'Client', sum(UnitPrice*Quantity) as 'CA', Country AS 'Pays'
from order_details
join orders
on order_details.orderID = orders.orderID
join customers
on orders.CustomerID = customers.CustomerID
group by CompanyName
having sum(UnitPrice*Quantity) > 30000
order by sum(UnitPrice*Quantity) desc;

/* Requête n°6*/
select distinct customers.Country as 'Pays'
from order_details
join orders
on order_details.orderID = orders.orderID
join customers
on orders.CustomerID = customers.CustomerID
join products
on order_details.productID = products.productID
join suppliers
on products.SupplierID = suppliers.SupplierID
where suppliers.CompanyName = 'Exotic Liquids'
order by customers.Country;

/* Requête n°7*/
select sum(UnitPrice*Quantity) as 'Montant Ventes 97'
from order_details
join orders
on order_details.orderID = orders.orderID
WHERE year(OrderDate) = 1997;

/* Requête n°8*/
select month(OrderDate) as 'Mois 97', sum(UnitPrice*Quantity) as 'Montant Ventes 97'
from order_details
join orders
on order_details.orderID = orders.orderID
WHERE year(OrderDate) = 1997
group by month(OrderDate)
having sum(UnitPrice*Quantity); 

/* Requête n°9*/
select max(OrderDate) as 'Date de dernière commande'
from orders
join customers
on orders.CustomerID = customers.CustomerID
where CompanyName = 'Du monde entier';

/* Requête n°10*/
select round(avg(datediff(ShippedDate,OrderDate))) as 'Délai moyen de livraison en jours'
from orders;