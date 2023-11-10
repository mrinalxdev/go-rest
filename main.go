package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type todo struct {
	ID        string `json:"id"`
	Item      string `json:"title"`
	Completed bool `json:"completed"`
}

var todos = []todo{
	{ID: "1", Item: "Clean Room", Completed: false},
	{ID: "2", Item: "Clean Bed", Completed: true},
	{ID: "3", Item: "Read Book", Completed: false},
}

func getTodos (context *gin.Context) {
	context.IndentedJSON(http.StatusOK, todos)
}

func addTodo (context*gin.Context) {
	var newTodo todo

	if err := context.BindJSON(&newTodo); err != nil {
		return 
	}

	todos = append(todos, newTodo)
	context.IndentedJSON(http.StatusCreated, newTodo)
}

func main() {
	router := gin.Default()
	router.GET("/todos", getTodos)
	router.POST("/todos/create", addTodo)
	router.Run("localhost:9090")
}
