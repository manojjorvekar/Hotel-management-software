package com.gl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gl.model.Admin;
import com.gl.repo.AdminRepo;

@RestController
public class AdminController {
	@Autowired
	private AdminRepo aRepo ;
	
	
	
	@PostMapping("/admin/login")
	@CrossOrigin( origins = "http://localhost:4200")
public int adminLogin(@RequestBody Admin ad) 
{
		 Admin ad1=aRepo.findByEmail(ad.getEmail());
		 if(ad1==null)
		 {
			 String msg="email does not exists ";
			 return 3;
		 }
		if(ad1.getPassword().equals(ad.getPassword())==true)
		{
			String msg="welcome";
			return 1;
		}
		else
		{
			String msg="email and password does not match....";
			return 2;
		
		}
	
}

}
