class LayoutsoptionsController < ApplicationController
  def index
  end

  def off_canvas
    render :layout => "layout_4"
  end

end