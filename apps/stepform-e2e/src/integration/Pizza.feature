Feature: Filtros por fecha en página principal

  Deseo poder filtrar por hoy/esta semana/mes actual los registros de ventas

  @focus
  Scenario: Filtrar por mes actual
    Given Yo tengo todo el listado de ventas
    Then Puedo filtrar la ventas del mes de "Noviembre"
