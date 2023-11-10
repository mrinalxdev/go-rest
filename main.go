package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"errors"
)

type todo struct {
	ID        string `json:"id"`
	Item      string `json:"item"`
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


func getTodo (context *gin.Context) {
	id := context.Param("id")
	todo, err := getTodoId(id)

	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message" : "Todo not found"})
		return
	}
	
	context.IndentedJSON(http.StatusOK, todo)
}

func getTodoId (id string) (*todo, error) {
	for i, t := range todos {
		if t.ID == id {
			return &todos[i], nil
		}
	}

	return nil, errors.New("todo not found")
}

func main() {
	router := gin.Default()
	router.GET("/todos", getTodos)
	router.GET("/todos/:id", getTodo)
	router.POST("/todos/create", addTodo)
	router.Run("localhost:9090")
}
