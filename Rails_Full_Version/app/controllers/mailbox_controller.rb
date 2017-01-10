class MailboxController < ApplicationController
  def inbox
  end

  def email_view
  end

  def compose_email
  end

  def email_templates
  end

  def basic_action_email
    render :layout => false
  end

  def alert_email
    render :layout => false
  end

  def billing_email
    render :layout => false
  end

end
