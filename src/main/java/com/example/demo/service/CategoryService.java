package com.example.demo.service;

import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServ {

    @Autowired
    private CategoryRepo categoryRepo;

    public List<Category>getAll(){
        return categoryRepo.getAll();
    }

    public Optional<Category> getCategory(Integer idCategory){
        return categoryRepo.getCategory(idCategory);
    }

    public Category save(Category c){
        if(c.getIdCategory()==null){
            return categoryRepo.save(c);
        }else{
            Optional<Category> caux = categoryRepo.getCategory(c.getIdCategory());
            if(caux.isEmpty()){
                return categoryRepo.save(c);
            }else {
                return c;
            }
        }
    }
}
