package com.gl.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gl.model.Product;
import com.gl.repo.ProductRepo;

@RestController
public class ProductController {
	
@Autowired
private ProductRepo pRepo;

@PostMapping("/addproduct")
@CrossOrigin( origins = "http://localhost:4200")
public Product addProduct(@RequestBody Product pr)
{
	return pRepo.save(pr);
}


@GetMapping("/products")
@CrossOrigin( origins = "http://localhost:4200")
public List<Product> getAllProducts()
{
	return pRepo.findAll();
}

@DeleteMapping("/product/{id}")
@CrossOrigin( origins = "http://localhost:4200")
public String deleteProduct(@PathVariable("id") int pid)
{
	Product pr=getProduct(pid);
	if(pr==null)
	{
		return "product dose not exist";
	}
	else
	{
		pRepo.delete(pr);
		return "deleted ...";
	}
	
}

@GetMapping("/products/{id}")
@CrossOrigin( origins = "http://localhost:4200")
public Product searchProduct(@PathVariable("id") int pid)
{
	return getProduct(pid);
}


public Product getProduct(int pid)
{
	Optional<Product> op=pRepo.findById(pid);
	Product pr=null;
	try
	{
		pr=op.get();
		return pr;
		
	}catch(Exception e)
	{
		return null;
	}
}


@PutMapping("/updateproduct")
@CrossOrigin( origins = "http://localhost:4200")
public String updateProduct(@RequestBody Product pr)
{
	Product dbProduct=getProduct(pr.getId());
	if(dbProduct==null)
	{
	 return "product does not exist ";
	}
	else
	{
		pRepo.save(pr);
		return "updated";
	}
}


}
