class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :img
      t.string :description

      t.timestamps
    end
  end
end
