package com.gl.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gl.model.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

}
