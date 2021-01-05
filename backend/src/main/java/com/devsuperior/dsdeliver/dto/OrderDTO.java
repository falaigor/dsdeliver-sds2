package com.devsuperior.dsdeliver.dto;

import java.io.Serializable;
import java.time.Instant;

import com.devsuperior.dsdeliver.entities.OrderStatus;

public class OrderDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String address;
	private Double latitude;
	private Double longitude;
	private Instant moment;
	private OrderStatus status;
	
}
