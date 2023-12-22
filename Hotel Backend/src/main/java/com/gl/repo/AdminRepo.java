package com.gl.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gl.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer>{
public Admin findByEmail(String email);
}
