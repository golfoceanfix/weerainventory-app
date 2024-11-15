import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const BASE_URL = `${process.env.REACT_APP_URL_API}`;

export const addProduct = createAsyncThunk(
  "product/add",
  async ({ product_code, product_name, typeproduct_code, bulk_unit_code, bulk_unit_price, retail_unit_code, retail_unit_price, unit_conversion_factor, tax1 }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/addproduct", {
        product_code,
        product_name,
        typeproduct_code,
        bulk_unit_code,
        bulk_unit_price,
        retail_unit_code,
        retail_unit_price,
        unit_conversion_factor,
        tax1,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async ({ product_code, product_name, typeproduct_code, bulk_unit_code, bulk_unit_price, retail_unit_code, retail_unit_price, unit_conversion_factor, tax1 }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/updateproduct", {
        product_code,
        product_name,
        typeproduct_code,
        bulk_unit_code,
        bulk_unit_price,
        retail_unit_code,
        retail_unit_price,
        unit_conversion_factor,
        tax1,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async ({ product_code }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/deleteproduct", {
        product_code,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const productAll = createAsyncThunk(
  "product/read",
  async ({ offset, limit }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/productall", { offset: offset, limit: limit });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const productAlltypeproduct = createAsyncThunk(
  "product/readWithTypeProduct",
  async ({ typeproduct_code, offset = 0, limit = 5 }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/productalltypeproduct", {
        typeproduct_code,
        offset,
        limit
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching products:", error.response?.data || error.message);
      throw error;
    }
  }
);


export const countProduct = createAsyncThunk(
  "product/count",
  async ({ typeproduct_code = null }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/countproduct", { typeproduct_code });
      return res.data;
    } catch (error) {
      console.error("Count product error:", error.response?.data || error.message);
      throw error;
    }
  }
);

export const searchProduct = createAsyncThunk(
  "productproduct/search",
  async (searchParams, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/searchproduct", searchParams);
      return res.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const lastProductCode = createAsyncThunk(
  "product/code",
  async ({ test }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/productcode", { test: test });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const searchProductCode = createAsyncThunk(
  "productproduct/search",
  async ({ product_code }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/SearchProductCode", {
        product_code,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

export const searchProductName = createAsyncThunk(
  "productproduct/search",
  async ({ product_name }, { dispatch }) => {
    try {
      const res = await axios.post(BASE_URL + "/api/SearchProductname", {
        product_name,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);

