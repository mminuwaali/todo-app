/// <reference types="nativewind/types" />

type TodoType = {
  id: string;
  title: string;
  completed: boolean;
  description: string;
};

type TodoStoreType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
};

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

type SearchBarProps = {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
};

type TodoCardPropType = TodoType & {
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
};

type FilterButtonsProps = {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

type FilterType = "all" | "completed" | "incomplete";
