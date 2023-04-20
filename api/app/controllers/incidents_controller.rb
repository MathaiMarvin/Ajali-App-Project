class IncidentsController < ApplicationController
    # protect_from_forgery with: :null_session

    before_action :authorize
    def index
        incidents = user.incidents.all
        app_response(message: 'success', status: :ok, data: incidents)
    end
    
    def create
    incident = user.incidents.create(incident_params)
    if incident.valid?
    app_response(status: :created, data: incident)
    else
    app_response(status: :unprocessable_entity, data: incident.errors, message: 'failed')
    end
    end
    
    def show
    incident = user.incidents.find_by(id: params[:id])
    if incident
    app_response(message: 'success', status: :ok, data: incident)
    else
    app_response(message: 'Incident not found', status: :not_found)
    end
    end
    
    def update
    incident = user.incidents.find_by(id: params[:id])
    if incident.update(incident_params)
    app_response(message: 'Incident updated successfully', status: :ok, data: incident)
    else
    app_response(message: 'Failed to update incident', status: :unprocessable_entity, data: incident.errors)
    end
    end
    
    def destroy
    incident = user.incidents.find_by(id: params[:id])
    if incident
    incident.destroy
    app_response(message: 'Incident deleted successfully', status: :ok)
    else
    app_response(message: 'Failed to delete Incident', status: :unprocessable_entity)
    end
    end
    
    private
    
    def incident_params
    params.require(:incident).permit(:title, :description, :status, :user_id )
    end
end

    
